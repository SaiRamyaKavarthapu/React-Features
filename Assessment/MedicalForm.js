import React from "react";



class MedicalForm extends React.Component {
    constructor() {
        super();
        this.state = {
            problemexperience: {
                Notrelevant: false,
                Whenlyingdown: false,
                Whensitting: false,
                Understanding: false,
                Inwalking: false,
                textAreaValue: "",
                selectedOption: "",
            },
            gender: '',

        };
    }
    handleChange = (event) => {


        this.setState({ textAreaValue: event.target.value });

        console.log("selectedOption", this.state.selectedOption)

    }


    handleClick = (event) => {
        const { name, checked } = event.target;

        this.setState((prevState) => {
            const problemexperience = prevState.problemexperience;
            problemexperience[name] = checked;
            return problemexperience;
        });
    };

    render() {
        const problemExperiences = Object.keys(this.state.problemexperience)
            .filter((key) => this.state.problemexperience[key])
            .join(", ");
        return (
            <div class="container">
                <form>
                    <div><center><h2 class="text-primary" > Pain & Functional Description</h2></center></div>
                    <div>
                        <center>  <p>The description of the current situation gives your Optimum <br />Trainer a picture of and clues to the underlying causes of your problems</p>
                        </center>
                    </div><br />
                    <br />
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">If you have problems with pain/aches,stiffness,weakness or functional problems, describle this/these below. (List the symptoms in descending order with the most troublesome first)
                        </label>
                        <textarea class="form-control" name="textValue"
                            onChange={this.handleChange} id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <p>Have you been diagnosed with this problem?</p>

                    <div onChange={this.handleChange.bind(this)}>
                        <input class="form-check-input" checked={this.state.selectedOption === "Not relevant"} type="radio" id="inlineRadio1" value="Not relevant" name="Not relevant" /> Not relevant
                        <input class="form-check-input" id="inlineRadio2" type="radio" value="Yes" name="Yes" /> Yes
                        <input class="form-check-input" id="inlineRadio3" type="radio" value="No" name="No" /> No </div>


                    <p>Did the problem start after a physical trauma?</p>

                    <div onChange={this.handleChange.bind(this)}>
                        <input class="form-check-input" checked={this.state.selectedOption === "Not relevant"} type="radio" id="inlineRadio1" value="Not relevant" name="Not relevant" /> Not relevant
                        <input class="form-check-input" id="inlineRadio2" type="radio" value="Yes" name="Yes" /> Yes
                        <input class="form-check-input" id="inlineRadio3" type="radio" value="No" name="No" /> No </div>

                    <p>Did the problem start after a mental trauma?</p>

                    <div onChange={this.handleChange.bind(this)}>
                        <input type="radio" value="Not relevant" name="Not relevant" /> Not relevant
                        <input type="radio" value="Yes" name="Yes" /> Yes
                        <input type="radio" value="No" name="No" /> No </div>

                    <p>How often do you experience the problem?</p>

                    <div onChange={this.handleChange.bind(this)}>
                        <input type="radio" value="Not relevant" name="Not relevant" /> Not relevant
                        <input type="radio" value="Daily" name="Daily" /> Daily
                        <input type="radio" value="Several times/week" name="Several times/week" /> Several times/week
                        <input type="radio" value="a few times/month" name="a few times/month" /> a few times/month
                        <input type="radio" value="a few times/year" name="a few times/year" /> a few times/year
                    </div>



                    <div>
                        <label>When do you experience the problem</label>
                        <div class="col-sm-3 col-md-6">
                            <input checked={this.state.problemexperience.Notrelevant} onChange={this.handleClick} type="checkbox" name="Notrelevant" /> Not relevant
                        </div>
                        <div>
                            <input checked={this.state.problemexperience.Whenlyingdown} onChange={this.handleClick} type="checkbox" name="Whenlyingdown" /> When lying down
                        </div>

                        <div>
                            <input checked={this.state.problemexperience.Whensitting} onChange={this.handleClick} type="checkbox" name="Whensitting" /> When sitting
                        </div>
                        <div>
                            <input checked={this.state.problemexperience.Understanding} onChange={this.handleClick} type="checkbox" name="Understanding" /> Under standing
                        </div>
                        <div>
                            <input checked={this.state.problemexperience.Inwalking} onChange={this.handleClick} type="checkbox" name="Inwalking" /> In walking
                        </div>

                    </div>
                    
                    <div col-sm-3 col-md-6><textarea class="form-control" name="textValue"
                           id="exampleFormControlTextarea1" rows="3">Other? For example in rotation ,side bends,wing stairs,When working with the arms above the head   </textarea>
                    </div>

                    <center><button type="button" class="btn btn-primary">BACK</button>     <button type="button" class="btn btn-primary">NEXT</button></center>


                    <p> Your problems are: {problemExperiences}</p>

                </form>
            </div>

        );
    }
}

export default MedicalForm;