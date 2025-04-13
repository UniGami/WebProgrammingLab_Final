import React from "react";
import ProfileImage from "./ProfileImage";
import UserInfo from "./UserInfo";
import UserPosts from "./UserPosts";

const ProfilePage = () => {
    const user = {
        imageUrl: "../public/Images/public-image.jpeg",
        name: "Sreenevedh",
        email: "sreenevdhunity@gmail.com",
        bio: "This is my bio.I am a student and some other stuff",
        posts: [
            "Every journey starts with a single step, but it's the pauses that make the difference.",
            "Not all who wander are lost, some are just finding their own way.",
            "The more you learn, the more you realize how much you don't know.",
            "Even the smallest spark can ignite the biggest change.",
            "It's not about the destination, it's about the moments in between."
        ]
        
    };

    return (
        <div className="profile-page">
            <h3>Question 3</h3>
            <ProfileImage imageUrl={user.imageUrl} />
            <UserInfo name={user.name} email={user.email} bio={user.bio} />
            <UserPosts posts={user.posts} />
        </div>
    );
};

export default ProfilePage;
