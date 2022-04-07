export function ColorCard(){
    const colorDetail=[
        {colour: "Primary",code: "#4e73df"},
        {colour: "Success", code: "#1cc88a"},
        {colour: "Info", code:"#36b9cc"},
        {colour: "Warning", code: "#f6c23e"},
        {colour: "Danger", code: "#e74a3b"},
        {colour: "Secondary", code: "#858796"},
        {colour: "Light", code: "#f8f9fc"},
        {colour: "Dark", code: "#5a5c69"},
    ]
    return(
     <div className="color-card-container">
         {colorDetail.map((clr) => (
            <Color colour={clr.colour} code={clr.code}/>
         ))}
         
     </div>
    );
}

export function Color({colour, code}){
    return(
      <div className="color-items">
          <div className="color-lists">
              <h6>{colour}</h6>
              <p>{code}</p>
          </div>
      </div>
    );
}