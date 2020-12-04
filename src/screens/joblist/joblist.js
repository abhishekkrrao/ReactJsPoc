import React,{ Component } from 'react';
import './style.scss'
class Joblist extends Component {
    constructor(props) {
        super(props)
        this.state = { list: [] };
    }
    render() {
        return (
            <div className="jobContainer">
                <header className="header"><p>Job List</p></header>
                <div className="gridContainer">
                    {this.state.list.map((obj,index) => {
                        return (
                            <div key={index} className="jobcard">
                                <h2>{obj.jobTitle}</h2>
                                <div className="jCname">
                                    <span>{obj.cName}</span>
                                </div>

                                <div className="jAdress">
                                    <span>{obj.address}</span>
                                </div>
                                <div className="jSalary">
                                    <span>{obj.salary}</span>
                                </div>

                                <div className="jRequirement">
                                    Requirements
                            <div className="jobCardReqItem">
                                        Exprience : {obj.experience}
                                    </div>
                                    <div className="jobCardReqItem">
                                        Degree : {obj.degree}
                                    </div>
                                </div>
                                {obj.jobDescription.map((innerObj,inindex) => {
                                    return (<div className="summary">
                                        <ul key={inindex}>
                                            <li key={inindex}>{innerObj}</li>
                                        </ul>

                                    </div>);

                                })}
                                <div className="jPost">
                                    <span>{obj.jobPostDate}</span>
                                    <span>{obj.jobStatus}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
    componentDidMount() {
        let list = [
            {
                jobTitle: "Senior AR associate",cName: "Sun Medical billing pvt ltd",
                address: "Hyderabad, Telangana",experience: "3 years (Required)",
                degree: "Bachelor's (Required)",jobStatus: "Urgently hiring",
                jobPostDate: "11 days ago",jobEnd: "1/12/2020",
                jobDescription: ["Design various data models (schema) using the Brinqa platform as dictated by the customer use case.",
                    "Design views, dashboards and reports to efficiently reflect the customer use case.",
                ],
                jobType: "Full-time",isAvailable: true,salary: "₹40,000 a month",
                rate: "4.5",status: "Full-time",remote: "Yes",jobDuties: "Accounts receivable"
            },
            {
                jobTitle: "healthcare business consultant",cName: "Sun Medical billing pvt ltd",
                address: "Hyderabad, Telangana",experience: "3 years (Required)",
                degree: "Bachelor's (Required)",jobStatus: "Urgently hiring",
                jobPostDate: "11 days ago",jobEnd: "1/12/2020",
                jobDescription: ["Design various data models (schema) using the Brinqa platform as dictated by the customer use case.",
                    "Design views, dashboards and reports to efficiently reflect the customer use case.",
                ],
                jobType: "Full-time",isAvailable: false,salary: "₹40,000 a month",
                rate: "4.5",status: "Full-time",remote: "Yes",jobDuties: "Accounts receivable"
            },
            {
                jobTitle: "Senior AR associate",cName: "Sun Medical billing pvt ltd",
                address: "Hyderabad, Telangana",experience: "3 years (Required)",
                degree: "Bachelor's (Required)",jobStatus: "Urgently hiring",
                jobPostDate: "11 days ago",jobEnd: "1/12/2020",
                jobDescription: ["Design various data models (schema) using the Brinqa platform as dictated by the customer use case.",
                    "Design views, dashboards and reports to efficiently reflect the customer use case.",
                ],
                jobType: "Full-time",isAvailable: true,salary: "₹40,000 a month",
                rate: "4.5",status: "Full-time",remote: "Yes",jobDuties: "Accounts receivable"
            },
            {
                jobTitle: "Senior AR associate",cName: "Sun Medical billing pvt ltd",
                address: "Hyderabad, Telangana",experience: "3 years (Required)",
                degree: "Bachelor's (Required)",jobStatus: "Urgently hiring",
                jobPostDate: "11 days ago",jobEnd: "1/12/2020",
                jobDescription: ["Design various data models (schema) using the Brinqa platform as dictated by the customer use case.",
                    "Design views, dashboards and reports to efficiently reflect the customer use case.",
                ],
                jobType: "Full-time",isAvailable: true,salary: "₹40,000 a month",
                rate: "4.5",status: "Full-time",remote: "Yes",jobDuties: "Accounts receivable"
            },
            {
                jobTitle: "Senior AR associate",cName: "Sun Medical billing pvt ltd",
                address: "Hyderabad, Telangana",experience: "3 years (Required)",
                degree: "Bachelor's (Required)",jobStatus: "Urgently hiring",
                jobPostDate: "11 days ago",jobEnd: "1/12/2020",
                jobDescription: ["Design various data models (schema) using the Brinqa platform as dictated by the customer use case.",
                    "Design views, dashboards and reports to efficiently reflect the customer use case.",
                ],
                jobType: "Full-time",isAvailable: false,salary: "₹40,000 a month",
                rate: "4.5",status: "Full-time",remote: "Yes",jobDuties: "Accounts receivable"
            },{
                jobTitle: "Senior AR associate",cName: "Sun Medical billing pvt ltd",
                address: "Hyderabad, Telangana",experience: "3 years (Required)",
                degree: "Bachelor's (Required)",jobStatus: "Urgently hiring",
                jobPostDate: "11 days ago",jobEnd: "1/12/2020",
                jobDescription: ["Design various data models (schema) using the Brinqa platform as dictated by the customer use case.",
                    "Design views, dashboards and reports to efficiently reflect the customer use case.",
                ],
                jobType: "Full-time",isAvailable: true,salary: "₹40,000 a month",
                rate: "4.5",status: "Full-time",remote: "Yes",jobDuties: "Accounts receivable"
            },{
                jobTitle: "Senior AR associate",cName: "Sun Medical billing pvt ltd",
                address: "Hyderabad, Telangana",experience: "3 years (Required)",
                degree: "Bachelor's (Required)",jobStatus: "Urgently hiring",
                jobPostDate: "11 days ago",jobEnd: "1/12/2020",
                jobDescription: ["Design various data models (schema) using the Brinqa platform as dictated by the customer use case.",
                    "Design views, dashboards and reports to efficiently reflect the customer use case.",
                ],
                jobType: "Full-time",isAvailable: true,salary: "₹40,000 a month",
                rate: "4.5",status: "Full-time",remote: "Yes",jobDuties: "Accounts receivable"
            },{
                jobTitle: "Senior AR associate",cName: "Sun Medical billing pvt ltd",
                address: "Hyderabad, Telangana",experience: "3 years (Required)",
                degree: "Bachelor's (Required)",jobStatus: "Urgently hiring",
                jobPostDate: "11 days ago",jobEnd: "1/12/2020",
                jobDescription: ["Design various data models (schema) using the Brinqa platform as dictated by the customer use case.",
                    "Design views, dashboards and reports to efficiently reflect the customer use case.",
                ],
                jobType: "Full-time",isAvailable: true,salary: "₹40,000 a month",
                rate: "4.5",status: "Full-time",remote: "Yes",jobDuties: "Accounts receivable"
            },{
                jobTitle: "Senior AR associate",cName: "Sun Medical billing pvt ltd",
                address: "Hyderabad, Telangana",experience: "3 years (Required)",
                degree: "Bachelor's (Required)",jobStatus: "Urgently hiring",
                jobPostDate: "11 days ago",jobEnd: "1/12/2020",
                jobDescription: ["Design various data models (schema) using the Brinqa platform as dictated by the customer use case.",
                    "Design views, dashboards and reports to efficiently reflect the customer use case.",
                ],
                jobType: "Full-time",isAvailable: true,salary: "₹40,000 a month",
                rate: "4.5",status: "Full-time",remote: "Yes",jobDuties: "Accounts receivable"
            }
        ];
        this.setState({ list: list },() => { });
    }
}

export default Joblist;