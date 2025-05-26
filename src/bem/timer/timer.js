export default class Timer {
	constructor() {
		this.timer_section_element = document.querySelector('.timer_context')
		this.minutes = parseInt(this.timer_section_element.dataset.minutes) || 0
		this.seconds = parseInt(this.timer_section_element.dataset.seconds) || 0
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

new Timer()

const timer__button = document.querySelector('.timer__button')
if (timer__button) {
	timer__button.addEventListener('click', () => {
		window.location.reload()
	})
}
