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

-> AWS Deployment 
--> sign in 
--> launch an instance
----->provide name, os , create key pair 
----> chmod 400 "devTinder-secret.pem" (for securing key pair secret file)
-->  connect to instance
----> ssh -i "devTinder-secret.pem" ubuntu@ec2-13-60-65-86.eu-north-1.compute.amazonaws.com
--> install nvm 
----> curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
--> install node (version same to localhost machine)
--> npm install 22
--> clone git repo using https link (FE+BE)
----> git clone <repo link>
Frontend
--> npm install
--> npm run build 
--> sudo apt update (updating ubuntu dependencies)
--> sudo apt install nginx (nginx helps to host application)
--> sudo systemctl start nginx 
--> sudo systemctl enable nginx
--> sudo scp -r dist/* /var/www/html/ (copying code files to server)
--> enable port 80 under security groups in aws console
