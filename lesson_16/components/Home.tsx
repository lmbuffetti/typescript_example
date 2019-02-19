import * as React from "react";

interface HomeProps {
    name: string;
    age: number;
}

function Home({name, age}: HomeProps) {
    return (
        <div>
            Hello there, {name}, you are {age}, right?
        </div>
    );
}

export default Home;