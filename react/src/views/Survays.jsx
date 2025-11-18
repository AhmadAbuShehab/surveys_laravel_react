import { PlusCircleIcon } from "lucide-react";
import TButton from "../components/core/TButton";
import PageComponent from "../components/pageComponent"
import SurveyListItem from "../components/SurveyListItem";
import { useStateContext } from "../context/ContextProvider"


export default function Survays() {
  const { surveys } = useStateContext();
  console.log(surveys);

  const onDeleteClick = () => {
    console.log("Clicked delete button");
  }

    return(
        <>
            <PageComponent title="Survays" children={surveys} 
            button={(<TButton color="green" to="/survays/create">
              <PlusCircleIcon className="w-6 h-6 mr-2" />
              Create New Survey
            </TButton>)}>
             <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
                {surveys.map((survey) => (
              <SurveyListItem survey={survey} key={survey.id} onClick={onDeleteClick}/>
             ))}
             </div>
              

              
            </PageComponent>
        
        </>
       
    )
}   