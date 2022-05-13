import React    from "react";
import template from "./Quiz.jsx";

class Quiz extends React.Component {
  constructor(){
    super();
    this.state={
       questionares:[],
       timeleft:10,
       ansObj:{},
       marks:0
    };
    this.optChange=this.optChange.bind(this);
    this.submitTheTest=this.submitTheTest.bind(this);
  }
  optChange(evnt){
    
    //let value=evnt.target.value;
   // let key= evnt.target.name;
    //let type= evnt.target.type;
    const {value,name,type,checked}=evnt.target;
    if(type==='checkbox'){
      let ansopted=this.state.ansObj[name]||'';
      if(checked){
         ansopted=ansopted+value;
      }else{
          ansopted.replace(value,'');
      }
      if(ansopted.length>1){
          ansopted=ansopted.split('').sort().join('');
          // console.log("ansopted",ansopted)
      }
      this.setState({
        ansObj:{
          ...this.state.ansObj,
          [name]:ansopted
        }
      });
    }else{
    this.setState({
      ansObj:{
        ...this.state.ansObj,
        [name]:value
      }
    });
    }
    //debugger;
  }
  componentDidMount(){
    let questionaresArr=[
                     {
                      id:1,
                      que:'What is React.js?',
                      opt1:'Open-source JavaScript back-end library',
                      opt2:'JavaScript front-end library to create a database',
                      opt3:'Free and open-source JavaScript front-end library',
                      opt4:'None of the mentioned',
                      ans:'C',
                      type:'s'
                     },
                     {
                      id:2,
                      que:'Which are the front end technologies?',
                      opt1:'CSS',
                      opt2:'HTML',
                      opt3:'Java Script',
                      opt4:'Java',
                      ans:'ABC',
                      type:'m'
                     },
                     {
                      id:3,
                      que:'Which of the following acts as the input of a class-based component?',
                      opt1:'Class',
                      opt2:'Props',
                      opt3:'Factory',
                      opt4:'None',
                      ans:'B',
                      type:'s'
                     },
                     {
                      id:4,
                      que:'Which are the front end technologies?',
                      opt1:'CSS',
                      opt2:'HTML',
                      opt3:'Java Script',
                      opt4:'Java',
                      ans:'ABC',
                      type:'m'
                     },
                     {
                      id:5,
                      que:'Which of the following acts as the input of a class-based component?',
                      opt1:'Class',
                      opt2:'Props',
                      opt3:'Factory',
                      opt4:'None',
                      ans:'B',
                      type:'s'
                     },
                      {     
                      id:6,             
                      que:'Which are the front end technologies?',
                      opt1:'CSS',
                      opt2:'HTML',
                      opt3:'Java Script',
                      opt4:'Java',
                      ans:'ABC',
                      type:'m'
                     },
                     {
                      id:7,                  
                      que:'Which of the following acts as the input of a class-based component?',
                      opt1:'Class',
                      opt2:'Props',
                      opt3:'Factory',
                      opt4:'None',
                      ans:'B',
                      type:'s'
                     },
                     {
                      id:8,
                      que:'Which are the front end technologies?',
                      opt1:'CSS',
                      opt2:'HTML',
                      opt3:'Java Script',
                      opt4:'Java',
                      ans:'ABC',
                      type:'m'
                     },
                     {
                      id:9,
                      que:'Which of the following acts as the input of a class-based component?',
                      opt1:'Class',
                      opt2:'Props',
                      opt3:'Factory',
                      opt4:'None',
                      ans:'B',
                      type:'s'
                     },
                     {
                      id:10,
                      que:'Which are the front end technologies?',
                      opt1:'CSS',
                      opt2:'HTML',
                      opt3:'Java Script',
                      opt4:'Java',
                      ans:'ABC',
                      type:'m'
                     }];
            this.setState({
              questionares: questionaresArr
            });

            
            this.timerValue=setInterval(()=>{
             // debugger;
               this.setState({
                 timeleft: this.state.timeleft-1
               })
                if(this.state.timeleft===1){
                    this.submitTheTest();
                }
            },1000);
  }
  render() {
    //debugger;
    return template.call(this);
  }
  submitTheTest(){
     let marks=5;
     clearInterval(this.timerValue);
    // alert(this.state.timeleft);
    console.log(this.state.ansObj);
    Object.keys(this.state.ansObj).forEach((qn)=>{
      let definedqa=this.state.questionares.find((origqn)=>{
           return origqn.id===qn
      })
      let anskey= definedqa.ans;
      let ansgiven=this.state.ansObj[qn];
      if(ansgiven===anskey){
         marks++;
      }
    })
    this.setState({
        marks
    });
  }
}

export default Quiz;
