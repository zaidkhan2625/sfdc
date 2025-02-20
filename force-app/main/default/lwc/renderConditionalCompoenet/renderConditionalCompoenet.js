import { LightningElement } from 'lwc';

export default class RenderConditionalComponent extends LightningElement {
    visiable = true;

    handleClick() {
        this.visiable = !this.visiable; // Correctly updating the property
    }
}
