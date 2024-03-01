import { render,screen } from "@testing-library/react";
import RestaurentCard,{promoteCard} from "../RestaurentCard";
import mock_data from "../mocks/restaurantCardMock.json";
import '@testing-library/jest-dom'

test("should render the restaurent component with data",()=>{
render(<RestaurentCard resList={mock_data}/>)
const resName=screen.getByText("KFC");
expect(resName).toBeInTheDocument()
});

// test("should render the restaurentCard component with promoted label",()=>{
//     render(
//         promoteCard(RestaurentCard)
//     )
//     const promoted=screen.getByRole('promoted');
//     expect(promoted).toBeInTheDocument()
// })