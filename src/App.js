import { ChatEngine } from "react-chat-engine";
 import './App.css';
 import ChatFeed from "./components/ChatFeed";
 import LoginForm from "./components/LoginForm"



 const App=()=>{
    if (!localStorage.getItem('username')) return <LoginForm />;

    return(
        <ChatEngine
            height="100vh"
            projectID="9fc6b29d-9684-4af7-b373-18902b6da245"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps} />}      
        
        
        />
    )
 }

 export default App;