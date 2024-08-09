import { useState } from 'react';

import { useUser } from '@auth0/nextjs-auth0/client';

import styles from '@/components/EditableText/EditableText.module.css';

export default function EditableText({ text, onSave, className }){

    const { user } = useUser();

    const [isEditing, setIsEditing] = useState(false);
    const [editableText, setEditableText] = useState(text);

    const handleEdit = () => {
        if (user) {
            setIsEditing(true);
        }
    };

    const handleSave = () => {

        onSave(editableText);
        setIsEditing(false);
    };

    return (
        isEditing ? (
            <div className={styles.textbox}>
                <textarea
                    type="text"
                    className={className}
                    value={editableText}
                    onChange={(e) => setEditableText(e.target.value)}
                />
                <button className={styles.button} onClick={handleSave}>Save</button>
            </div>
        ) : (
            <div onClick={handleEdit}>{text}</div>
        )
    );

    
};
