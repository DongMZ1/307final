import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";
import "../static/bodycomponent.css";
// Import React Table
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import kemme from "../pictures/kemme.jpg";

let mydata = [
  {
    firstName: "Bettina",
    lastName: "Kemme",
    position: "Director of the School",
    field: "Databases, Networks, Parallel and Distributed Systems, Computer Games",
    office: "McConnell 109N/318 (Director)",
    phone:  "+1-514-398-8930",
    email: "kemme@cs.mcgill.ca"
  },
  {
    firstName: "Mathieu",
    lastName: "Blanchette",
    position: "Associate Director of Research",
    field: "Bioinformatics, Computational Biology",
    office: "Trottier 3107",
    phone:  "+1-514-398-5209",
    email: "blanchem@cs.mcgill.ca"
  },
  {
    firstName: "Oana",
    lastName: "Balmau",
    position: "Professor",
    field: "Computer Systems, Storage and Persistent Memory,  Storage Systems for Data Science, Data Management for IoT ",
    office: "website: oana.balmau@cs.mcgill.ca",
    phone:  "+1-514-398-8930",
    email: "oana.balmau@cs.mcgill.ca"
  },
  {
    firstName: "Jackie Chi Kit",
    lastName: "Cheung",
    position: "Professor",
    field: "Computational Linguistics, Natural Language Processing",
    office: "website: oana.balmau@cs.mcgill.ca",
    phone:  "+1-514-398-8930",
    email: "oana.balmau@cs.mcgill.ca"
  },
];

export default class PeopleFaculty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: mydata,
    };
  }

  render() {
    const { data } = this.state;
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {(props) => (
          <div class="row" style={props}>
            <ScrollToTopOnMount />
            <div class="col-md-2" style={{ backgroundColor: "aliceblue" }}>
              <div
                class="nav flex-column nav-pills"
                id=""
                role="tablist"
                aria-orientation="vertical"
              >
                <div class="tab-name">People</div>
                <a
                  class="nav-link active"
                  id=""
                  data-toggle="pill"
                  href="#/People/PeopleFaculty"
                  role="tab"
                >
                  Faculty
                </a>
                <a
                  class="nav-link"
                  id=""
                  data-toggle="pill"
                  href="#/People/PeopleStaff"
                  role="tab"
                >
                  Staff
                </a>
                <a
                  class="nav-link"
                  id=""
                  data-toggle="pill"
                  href="#/People/PeopleCommunity"
                  role="tab"
                >
                  Community
                </a>
              </div>
            </div>
            <div class="col-md-10 right-column">
              <div className="body">
                <ReactTable
                  data={data}
                  columns={[
                    {
                      Header: "Name",
                      columns: [
                        {
                          Header: "Photo",
                          id: "photo",
                          width: 100,
                          height: 100,
                          Cell: (row) => {
                            return <div><img height={50} src={kemme}/></div>
                          },
                        },
                        {
                          Header: "First Name",
                          id: "firstName",
                          width: 100, 
                          accessor: (d) => d.firstName,
                          sortMethod: (a, b) => {
                            if (a === b) {
                              return 0;
                            }
                            const aReverse = a.split("").join("");
                            const bReverse = b.split("").join("");
                            return aReverse > bReverse ? -1 : 1;
                          },
                        },
                        {
                          Header: "Last Name",
                          id: "lastName",
                          width: 100, 
                          accessor: (d) => d.lastName,
                          sortMethod: (a, b) => {
                            if (a === b) {
                              return 0;
                            }
                            const aReverse = a.split("").reverse().join("");
                            const bReverse = b.split("").reverse().join("");
                            return aReverse > bReverse ? -1 : 1;
                          },
                        },
                        {
                          Header: "Position",
                          id: "position",
                          width: 200, 
                          accessor: (d) => d.position,
                          sortMethod: (a, b) => {
                            if (a === b) {
                              return 0;
                            }
                            const aReverse = a.split("").reverse().join("");
                            const bReverse = b.split("").reverse().join("");
                            return aReverse > bReverse ? -1 : 1;
                          },
                        },
                        {
                          Header: "Field",
                          id: "field",
                          width: 600,
                          accessor: (d) => d.field,
                          sortMethod: (a, b) => {
                            if (a === b) {
                              return 0;
                            }
                            const aReverse = a.split("").reverse().join("");
                            const bReverse = b.split("").reverse().join("");
                            return aReverse > bReverse ? 1 : -1;
                          },
                        },
                        {
                          Header: "Office",
                          id: "office",
                          Cell: (row) => {
                            return <div><img height={34} src={kemme}/></div>
                          },
                        },
                        {
                          Header: "Phone",
                          id: "phone",
                          Cell: (row) => {
                            return <div><img height={34} src={kemme}/></div>
                          },
                        },
                      ],
                    }
                  ]}
                  defaultPageSize={10}
                  className="-striped -highlight"
                />
              </div>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

class ScrollToTopOnMount extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 600);
  }

  render() {
    return null;
  }
}
