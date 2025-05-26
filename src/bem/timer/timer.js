export default class Timer {
	constructor(minutes, seconds) {
		this.timer_section_element = document.querySelector('.timer_context')
		this.minutes = minutes
		this.seconds = seconds
		this.render()
		this.startTimer()
	}

	formatTime(time) {
		return time < 10 ? `0${time}` : time
	}

	render() {
		this.timer_section_element.innerHTML = `
      ${this.formatTime(this.minutes)}:${this.formatTime(this.seconds)}
    `
	}

	startTimer() {
		setInterval(() => {
			this.updateTime()
			this.render()

			if (this.minutes === 0 && this.seconds === 0) {
				window.location.reload()
			}
		}, 1000)
	}

	updateTime() {
		if (this.seconds === 0) {
			this.minutes--
			this.seconds = 59
		} else {
			this.seconds--
		}
	}
}

new Timer(30, 0)

const timer__button = document.querySelector('.timer__button')
if (timer__button) {
	timer__button.addEventListener('click', () => {
		window.location.reload()
	})
}
