import React, { useState, useEffect, useRef } from 'react';
import { db } from "../Firebase/firebase";
import { collection, addDoc, serverTimestamp, query, orderBy, onSnapshot } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useTranslation } from 'react-i18next';

import './Chat.css';

import LogOutModalWindow from '../Component/LogOutModalWindow/LogOutModalWindow';
import AutoExpandingTextarea from '../Component/AutoExpandingTextarea/AutoExpandingTextarea';

import { AiOutlinePlus } from 'react-icons/ai';
import { IoSend } from 'react-icons/io5';
import { BiLogOut } from 'react-icons/bi';
import ProfileImage from '../Images/myPhoto.png';


const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [isLogOutModalWindowOpen, setLogOutModalWindowOpen] = useState(false);

    const fullName = localStorage.getItem('userName') || "";
    const phoneNumber = localStorage.getItem('userPhone') || '';

    const fileInputRef = useRef(null);

    const { t } = useTranslation();

    const triggerFileInput = () => {
        fileInputRef.current.click();
    };

    useEffect(() => {
        const messagesRef = collection(db, 'chats', phoneNumber, 'messages');
        const q = query(messagesRef, orderBy('createdAt', 'desc'));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const fetchedMessages = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setMessages(fetchedMessages.reverse());
        });

        return () => unsubscribe();
    }, [phoneNumber]);

    const handleSendMessage = async () => {
        if (newMessage.trim()) {
            await addDoc(collection(db, 'chats', phoneNumber, 'messages'), {
                text: newMessage,
                createdAt: serverTimestamp(),
                fullName: fullName
            });
            setNewMessage('');
        }
    };

    const handleUploadFile = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const fileExtension = file.name.split('.').pop();
            const filePath = file.type.startsWith('image/') ?
                `${phoneNumber}/images/${file.name}`
                : `files/${file.name}.${fileExtension}`;

            const storage = getStorage();
            const storageRef = ref(storage, filePath);

            try {
                const snapshot = await uploadBytes(storageRef, file);
                const downloadURL = await getDownloadURL(snapshot.ref);

                const messageData = {
                    createdAt: serverTimestamp(),
                    fullName: fullName
                };

                if (file.type.startsWith('image/')) {
                    messageData.imageUrl = downloadURL;
                } else {
                    messageData.fileUrl = downloadURL;
                    messageData.fileName = file.name;
                }

                await addDoc(collection(db, 'chats', phoneNumber, 'messages'), messageData);
            } catch (error) {
                console.error("Ошибка при загрузке файла: ", error);
            }
        }
    };

    const handleLogOut = () => {
        setLogOutModalWindowOpen(true); 
    };

    const confirmLogOut = () => {
        localStorage.removeItem('userName');
        localStorage.removeItem('userPhone');
        window.location.href = '/';
    };

    return (
        <div>
            <div className="chat-modal">
                <div className="profile-container">
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <img src={ProfileImage} alt="Profile" className="profile-image" />
                        <div style={{ display: "block" }}>
                        <p className="profile-name">{t("michael")}</p>
                            <p className="profile-status">online</p>
                        </div>
                    </div>
                    <div className="exit-button" >
                        <BiLogOut size={30} color='white' onClick={() => handleLogOut()} />
                        <LogOutModalWindow
                            isOpen={isLogOutModalWindowOpen}
                            onClose={() => setLogOutModalWindowOpen(false)}
                            onConfirm={confirmLogOut}
                        />
                    </div>
                </div>


                <div className="messages">
                    {messages.map(message => (
                        <div key={message.id} className={message.username === fullName ? "my-message" : "their-message"}>
                            <div>
                                <div className="message-header">
                                    {message.text}
                                    {message.imageUrl && <img src={message.imageUrl} alt="Sent" />}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="message-input">

                    <input
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        ref={fileInputRef}
                        onChange={handleUploadFile}
                    />
                    <AiOutlinePlus size={23} onClick={triggerFileInput} />
                    <AutoExpandingTextarea
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type your message here..."
                        onEnterPress={handleSendMessage}
                    />

                    <div style={{ paddingRight: 5 }}>
                        {newMessage === "" ?
                            <IoSend size={20} onClick={handleSendMessage} />
                            :
                            <IoSend color='#f6b41e' size={20} onClick={handleSendMessage} />
                        }
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Chat;
