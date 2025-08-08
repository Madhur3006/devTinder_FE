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


--------------------------------------------------------------------------------
-> AWS Deployment
--> sign in
--> launch an instance
----->provide name, os , create key pair
----> chmod 400 "devTinder-secret.pem" (for securing key pair secret file)
--> connect to instance
----> ssh -i "devTinder-secret.pem" ubuntu@ec2-13-60-65-86.eu-north-1.compute.amazonaws.com
--> install nvm
----> curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
--> install node (version same to localhost machine)
----> npm install 22
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

Backend
-> npm install
-> npm run start
-> enabling port no in security groups using aws console
-> npm install pm2 -g (pm2 helps in keep BE running all time 24*7)
-> pm2 start npm -- start (to start using pm2)
-> pm2 logs (to check logs if app fails to start)
-> pm2 stop npm (to stop server)

Now both are running on different ports
FE-> http://13.60.65.86/login
BE-> http://13.60.65.86:3000/login


Now to update nginx file for BE to to listen on /api/

--> sudo nano /etc/nginx/sites-available/default
--> Below should be updated in file       
        server_name 13.60.65.86;

        location /api/ {
           proxy_pass http://localhost:3000/;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
        }
--> sudo systemctl restart nginx 

now:
FE-> http://13.60.65.86
BE-> http://13.60.65.86/api 

Modify the BASE_URL in constants to /api 

----------------------------------------------------------------------

** everytime for new FE changes 
-> cd <FE Repo>
-> git pull
-> npm run build
-> sudo scp -r dist/* /var/www/html/ 

** everytime you new BE changes 
-> cd <BE Repo>
-> pm2 stop npm 
-> git pull 
-> pm2 start npm -- start

--------------------------------------------------------------------
chat feature 

-> npm i socket.io-client

--------------------------------------------------------------------


Bugs: 
1) Signup 
-> password validator details
-> password encryption UI (*****)
-> sign up button and succes msg 

2) Feed
-> Crousel kind of effect 
-> Profile image 

3) Connections Page
-> Connection data 

4) Profile
-> User card section aside


