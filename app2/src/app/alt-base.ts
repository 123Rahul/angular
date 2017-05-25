export class AltBase<T> {
    value: T;
    key: string;
    label: string;
    order: number;
    controlType: string;
    disable: boolean;

    constructor(options:{
        value?:T,
        key?:string,
        label?:string,
        order?:number,
        controlType?:string,
        disable?:boolean
    }={}){
        this.value=options.value;
        this.key=options.key||'';
        this.label=options.label||'';
        this.order=options.order===undefined?1:options.order;
        this.controlType=options.controlType||'';
        this.disable=options.disable||false;
    }
}