import {tns} from "tiny-slider/src/tiny-slider"

class SliderBlockInit {
    static slidersList = new Set()

    #func = (slider, options) => {
        if (SliderBlockInit.slidersList.has(slider)) {
            return
        }

        SliderBlockInit.slidersList.add(slider)
        tns(options(slider));
    }

    init = (selector, options) => {
        if (typeof selector === 'string') {
            const sliderBlocks = document.querySelectorAll(selector);

            if (sliderBlocks.length) {
                sliderBlocks.forEach(slider => this.#func(slider, options))
            }
        } else {
            this.#func(selector, options)
        }
    }
}

const sliders = new SliderBlockInit();

export default sliders

