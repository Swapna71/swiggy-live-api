import User from "./User";
import React from "react";
import UserClass from "./UserClass";
import UserContext from "./utils/UserContext";



class About extends React.Component {
  constructor(props) {
    super(props); 
    console.log("parent constructor");
  }
  componentDidMount() {
    console.log("PARENT COMPONENTDIDMOUNT");
  }
  render() {
    console.log("parent render");
    return (
      <div className="m-10">
        <h1 className="bg-lime-900 text-white font-black text-xl text-center p-4">About Us</h1>
        <p className="m-6 font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quae
          asperiores, veniam odit quibusdam assumenda. Nulla quaerat error
          porro, culpa molestias nihil dolore molestiae perspiciatis maxime
          quisquam, id sit eum quibusdam quidem excepturi illo! Non deserunt
          explicabo corporis magni Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nam in nemo, praesentium culpa dolorum libero
          debitis voluptate odit illo ab, beatae deserunt! Aliquid vitae,
          maiores nihil deleniti consequatur placeat tempore magnam doloribus
          vero ullam iste suscipit sequi quibusdam totam quisquam impedit
          consequuntur repellendus. Excepturi porro officiis recusandae
          assumenda delectus quo ut distinctio voluptatum est necessitatibus
          repudiandae consectetur eum fugiat veritatis vitae, molestias suscipit
          explicabo nisi quisquam tenetur fuga earum dolorem possimus pariatur!
          Eveniet repudiandae quaerat vitae. Et ratione pariatur suscipit facere
          facilis vero repellat? Praesentium nostrum voluptatibus numquam nemo
          ducimus veritatis, maxime corporis nisi molestias sapiente nulla
          tempora magnam voluptatem!
        </p>
        
        <UserContext.Consumer>
{({loggedIn})=>loggedIn}
</UserContext.Consumer>
<div className="flex justify-center">
        <User
          name={"Swapna Sikdar"}
          location={"west bengal-Raiganj"}
          email={"swapnasikdar55@gmail.com"}
        />
        <UserClass
          name={"Sudip Deb"}
          location={"west bengal-Balurghat"}
          email={"swapnasikdar55@gmail.com"}
        />
        </div>
      </div>
    );
  }
}

export default About;
