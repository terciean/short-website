import React from "react";

// Logo: Horns form a V, blue/white/black palette, Spit Braai text inside grill
const LogoSVG = ({ width = 240, height = 90 }) => (
  <svg width={width} height={height} viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display:'block'}}>
    {/* Background */}
    <rect width="800" height="800" fill="none" />
    
    {/* AN'S text */}
    <text x="320" y="400" fontFamily="serif" fontWeight="bold" fontSize="180" fill="#e4d5b7" letterSpacing="2">AN'S</text>
    
    {/* Horns/Symbol */}
    <path d="M165 300 C120 200 140 150 180 230 C220 150 240 200 195 300" fill="#e4d5b7" />
    <path d="M165 300 C120 200 140 150 180 230 C220 150 240 200 195 300" fill="none" stroke="#e4d5b7" strokeWidth="6" />
    
    {/* SPIT BRAAI text */}
    <text x="260" y="650" fontFamily="serif" fontWeight="bold" fontSize="100" fill="#e4d5b7" letterSpacing="2">SPIT BRAAI</text>
    
    {/* Spit setup */}
    <path d="M150 700 L650 700" stroke="#e4d5b7" strokeWidth="10" />
    <path d="M200 700 C200 650 600 650 600 700" stroke="#e4d5b7" strokeWidth="10" fill="none" />
    
    {/* Fire under spit */}
    <path d="M350 710 L450 710 L425 680 L400 720 L375 680 L350 710" fill="#d35400" />
    <path d="M370 700 L430 700 L415 680 L400 710 L385 680 L370 700" fill="#e67e22" />
    
    {/* Roasted animal on spit */}
    <path d="M220 500 L580 500" stroke="#7c5c2b" strokeWidth="8" />
    <path d="M400 500 C340 450 300 480 310 530 C270 550 270 490 310 470 C320 410 380 380 450 410 C520 380 580 410 590 470 C630 490 630 550 590 530 C600 480 560 450 500 500" fill="#bb7547" />
    <path d="M400 500 C340 450 300 480 310 530 C270 550 270 490 310 470 C320 410 380 380 450 410 C520 380 580 410 590 470 C630 490 630 550 590 530 C600 480 560 450 500 500" fill="none" stroke="#7c5c2b" strokeWidth="4" />

    {/* Legs hanging down */}
    <path d="M340 530 L330 580" stroke="#7c5c2b" strokeWidth="6" />
    <path d="M460 530 L470 580" stroke="#7c5c2b" strokeWidth="6" />
    
    {/* Head shape */}
    <ellipse cx="310" cy="500" rx="30" ry="20" fill="#bb7547" stroke="#7c5c2b" strokeWidth="3" />
  </svg>
);

export default LogoSVG;