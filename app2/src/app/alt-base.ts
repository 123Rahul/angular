export class AltBase<T> {
    value: T;
    key: string;
    label: string;
    order: number;
    controlType: string;
    disable: boolean;
    event:boolean;

    constructor(options:{
        value?:T,
        key?:string,
        label?:string,
        order?:number,
        controlType?:string,
        disable?:boolean,
        event?:boolean
    }={}){
        this.value=options.value;
        this.key=options.key||'';
        this.label=options.label||'';
        this.order=options.order===undefined?1:options.order;
        this.controlType=options.controlType||'';
        this.disable=options.disable||false;
        this.event=options.event||false;
    }
}