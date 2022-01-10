/*function tickTock() {
const element =
      <div>
      <h1> Hello, everyone </h1>
      <h2> The time is {new Date().toLocaleTimeString()}.</h2>
</div>
ReactDOM.render(element, document.getElementById('root'));
 }       
        setInterval(tickTock,1000)
*/

/*function time(){
const tick = 
<div>
<h1> Good day.</h1>
<h2> It is {new Date().toLocaleTimeString()}.</h2>
</div>
ReactDOM.render(tick,
document.getElementById('root'));
}
setInterval(time, 1000)

*/
/*
const element = <h1> Hello everyone</h1>;

ReactDOM.render(element, document.getElementById('root'));
*/
/*function tick(){
  const element =
  <div>
    <h1> Hello</h1>
    <h2> The time is {new Date().toLocaleTimeString()}.</h2>
        </div>
    ReactDOM.render(element, document.getElementById('root'))
}
setInterval(tick, 1000)

*/

/*function Greetings(props) {
  return <h1> Hello, {props.name}</h1>
}

const element = // Here is the property<Greetings name = "Joe" />; //Joe is the value. ReactDOM. render renders the name.
ReactDOM.render(element, document.getElementById('root'));
*/
/*function Introduce(props) {
  return <h1> Hello sir, my name is {props.name}.</h1>
}

function Group() {
  return (
  <div>
  <Introduce name = "Jim" />
    <Introduce name = "Tom" />
    </div>
  );
}

ReactDOM.render(<Group />,
document.getElementById('root')
                );
 */
/*function Meetup(props) {
  return <h1> Come here {props.name}.</h1>
  }
function Class(){
  return (
  <div>
    <Meetup name = "Tim" />
    <Meetup name = "John" />
    <Meetup name = "Person" />
      </div>
    );
}
      
 ReactDOM.render(<Class />, document.getElementById('root')
      );
      
      */
/*function Picture(props) {
  return (
  <img className = "Picture"
  src={props.user.pictureUrl}
  alt={props.user.name}
/>
    
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <Picture user={props.author}/>        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
ReactDOM.render(
  <Comment />,
  document.getElementById('root')
);

*/
/*const element = <h1> Hello, sir</h1>
      ReactDOM.render(element, document.getElementById('root'))
      
      */
/*const element =  <h1> Hello</h1>
      ReactDOM.render(element, document.getElementById('root'))
      */
/*function Welcome(props){
  return <h1> Hello, {props.name} </h1>
}
  const element = <Welcome name = "John" />;

ReactDOM.render(element, document.getElementById('root')
                );*/
function Greetings(props) {
  return <h1> Hello. {props.name} </h1>
}

const element = <Greetings name = "Tom" />
      ReactDOM.render(element,
      document.getElementById('root'))