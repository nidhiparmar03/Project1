import logo from './logo.svg';
import './App.css';

function App() {
  const person = {
    name: "Amit",
    age: 25
  }


  const person2 = [
    {
      name: "Amit",
      age: 25,
    },
    {
      name: "Piyush",
      age: 40,
    },


  ];


  const person3 = {
    name: "Amit",
    age: 25,
    course: [
      "C",
      "HTML"
    ]
  }


  const person4 = [
    {
      name: "Amit",
      age: 25,
      course: [
        "C",
        "HTML"
      ]
    },
    {
      name: "Ajay",
      age: 40,
      course: [
        "Java",
        "JavaScript"
      ]
    }
  ]


  const myObj = {
    name: "John",
    age: 30,
    cars: {
      car1: "Ford",
      car2: "BMW",
      car3: "Fiat"
    }
  }

  const data = {
    personal_info: {
      name: 'amit',
      age: 25,
      city: 'surat'
    },
    courses: ["C", "JavaScript", "React"],
    branches: {
      rwl: {
        admission: 50,
        vacant_seat: 10
      },
      rw2: {
        admission: 30,
        vacant_seat: 20
      },
      rw3: {
        admission: 25,
        vacant_seat: 25
      },
      rw4: {
        admission: 40,
        vacant_seat: 10
      }
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
