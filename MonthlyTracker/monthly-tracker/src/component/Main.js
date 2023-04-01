import React from "react"
import Month from "./Month"

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activityName: JSON.parse(localStorage.getItem('activity')) || []
        }

        this.d = new Date()
        this.year = this.d.getFullYear()
        this.month = this.d.getMonth()
        this.totalDays = new Date(this.year, this.month + 1, 0).getDate()
        this.monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    }

    handleLocalStorage = () => {
        localStorage.setItem('activity', JSON.stringify(this.state.activityName))
    }


    handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target.elements.activity.value)
        if (event.target.elements.activity.value) {
            let input = event.target.elements.activity.value
            let daysArr = []
            for (let i = 1; i <= this.totalDays; i++) {
                daysArr.push({ day: i, isActive: false })
            }

            this.setState((preState) => {
                return {
                    activityName: preState.activityName.concat([{ activity: input, days: daysArr }])
                }
            },
                this.handleLocalStorage
            )
        }
        event.target.reset()
    }

    handleDay = (name, day) => {
        this.setState((preState) => {
            return {
                activityName: preState.activityName.filter((a) => {
                    console.log(a, name, day)
                    if (a.activity === name) {
                        return a.days.filter((d) => {
                            if (d.day === day) {
                                d.isActive = d.isActive ? false : true
                                return d
                            }
                            return d
                        })
                    }
                    return a
                })
            }
        }, this.handleLocalStorage)
    }


    handleDelete = (activity) => {
        this.setState((preState) => {
            return {
                activityName: preState.activityName.filter((a) => a.activity !== activity)
            }
        }, this.handleLocalStorage)
    }

    render() {
        let { activityName } = this.state
        console.log(activityName)
        return (
            <>
                <main className="container">
                    <section className="flex flex-center">
                        <form className="flex flex-center" onSubmit={this.handleSubmit}>
                            <input text='text' name='activity' placeholder="eg- coding" />
                            <button className="btn" text='submit'>Add Activity</button>
                        </form>
                    </section>
                </main>
                {activityName.length > 0 ? <Month activityName={activityName} monthName={this.monthName} month={this.month} handleDelete={this.handleDelete} handleDay={this.handleDay} /> : ''}
            </>
        )
    }
}

export default Main