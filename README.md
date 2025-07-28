# React + Vite
-> npm create vite@latest devTinder_FE -- --template react 
-> npm install tailwindcss @tailwindcss/vite 
   --> import config in vite.config file 
   --> @import "tailwindcss" in css fille 
-> npm i -D daisyui@latest == component library for tailwindcss 

-> create Navbar.jsx and Copy paste code from daisy UI Navbar component 
-> import Navbar into App.jsx 

-> install npm i react-router-dom
  -> BrowserRouter -> Routes -> Route (path, element)
  -> use outlet for render children routes 

-> create Login page 
-> npm i axios 
-> npm changes to BE repo for handling cors and pass withCredentials: true in axios 

-> npm install @reduxjs/toolkit react-redux
  --> configiureStore -> provider -> create Slice -> provide reducer 
  --> useDispatch() for dispatching actions
  --> useSelector() for subscribing store 

Todo: 
1) add url's to database 
2) make user card 
3) create edit profile page 
