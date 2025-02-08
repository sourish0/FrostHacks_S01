"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import './style.css'; // Ensure the styles are correct here
import { useRouter } from "next/navigation";
import logo from "../../../public/3.png";

export default function SideBar() {
  const router = useRouter();

  // Optional: if you want to handle routing using router.push, 
  // you can use these functions, but it's cleaner to use Link.
  function navigate() {
    router.push('/posts');
  }

  function home() {
    router.push('/');
  }

  function profile() {
    router.push('/profile'); // Fix to a specific Profile page
  }

  function support() {
    router.push('/support'); // Fix to a specific Support page
  }

  return (
    <div className="sidebar-body">
      <div className="menu-button-bar">
        <div className="logo">
          <Image src={logo} alt="Logo" />
        </div>
        <p onClick={home}>Home</p>
        <p onClick={navigate}>Posts</p>
        <Link href="?create=true" className="create">
          <button>Create</button>
        </Link>
        <p onClick={profile}>Profile</p>
        <p onClick={support}>Support</p>
      </div>
    </div>
  );
}
