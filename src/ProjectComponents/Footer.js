export function Footer(){
    const footer={content: "Copyright © Your Website 2021"}
    return(
       <div className="footer-container">
           <div>
               <span>{footer.content}</span>
           </div>
       </div>
    );
}