import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}
/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}
/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role="list"],
ol[role="list"] {
  list-style: none;
}
/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}
/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}
/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}
/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
  line-height: 0;
}
/* this fixes the error in the animation that was displaying the scrollbar */
html,
body {
  font-family: 'Public Sans', sans-serif;
  background-color: #EDF3F8;
  width: 100%;
  display: flex;
  overflow-x: hidden;
  justify-content: center;
  flex-direction: column;
}
/* remove all button styles */
button {
  all: unset;
  cursor: pointer;
}
/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}
/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
.sr-only {
  position: absolute;
  width: 0.0625rem;
  height: 0.0625rem;
  padding: 0;
  margin: -0.0625rem;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
}
button,
a {
  &:focus {
    
  }
}
body {
  &::-webkit-scrollbar {
    width: 0.75rem;              
  }
  &::-webkit-scrollbar-track {
    background: #D2DBE3;        
  }
  &::-webkit-scrollbar-thumb {
    background: #1F2C38;    
    border-radius: 1.25rem;    
  }
}`