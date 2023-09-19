import './App.css';
import FormInput from './Components/CRUDtask/FormInput';
import Heading from './Components/CRUDtask/Heading';
import TaskLists from './Components/CRUDtask/TaskLists';
import Counter from './Components/Counter/Counter';

function App() {
  return (
    <>
    {/* <Counter/> */}
    <Heading/>
    <FormInput/>
    <TaskLists/>
    </>
  );
}

export default App;
