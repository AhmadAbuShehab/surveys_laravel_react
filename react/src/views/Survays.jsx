import PageComponent from "../components/pageComponent"
import SurveyListItem from "../components/SurveyListItem";
import { useStateContext } from "../context/ContextProvider"


const content = [
  {
    "name": "Ahmad",
    "comment": "Great work on the project—clean code and thoughtful design!"
  },
  {
    "name": "Sarah Johnson",
    "comment": "I really appreciate the attention to detail in every component."
  },
  {
    "name": "Marcus Lee",
    "comment": "This exceeded my expectations. Well done!"
  },
  {
    "name": "Elena Rodriguez",
    "comment": "The UI is intuitive and the performance is smooth."
  },
  {
    "name": "James Wilson",
    "comment": "Could use a bit more documentation, but overall excellent."
  },
  {
    "name": "Priya Sharma",
    "comment": "Love the responsive design—works perfectly on mobile."
  },
  {
    "name": "Tom Chen",
    "comment": "Fast loading and great accessibility features."
  },
  {
    "name": "Linda Garcia",
    "comment": "A little more color contrast would help readability."
  },
  {
    "name": "Robert Kim",
    "comment": "Solid foundation. Would love to see this expanded further."
  },
  {
    "name": "Nina Patel",
    "comment": "Perfect for our use case—simple, reliable, and elegant."
  }
]

export default function Survays() {
  const { surveys } = useStateContext();
  console.log(surveys);

  const onDeleteClick = () => {
    console.log("Clicked delete button");
  }

    return(
        <>
            <PageComponent title="Survays" children={surveys} >
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {surveys.map((survey) => (
              <SurveyListItem survey={survey} key={survey.id} onClick={onDeleteClick}/>
             ))}
             </div>
              

              
            </PageComponent>
        
        </>
       
    )
}   