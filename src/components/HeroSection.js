import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import'../App.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/tech-background.mp4' autoPlay loop muted />
            <h1>The Password Manager of the Future is Here</h1>
            <p>Now with the Power of Artificial Intelligence</p>
            <div className="hero-btns">
                <Button className='btns'buttonStyle='btn--outline' 
                buttonSize='btn--large'>Get Started</Button>
            </div>
        </div>
    );
}

export default HeroSection;