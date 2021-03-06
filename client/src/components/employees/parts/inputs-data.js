const inputs_data = [
    {
        label:'NAME',
        property_name:'name',
        type:'text',
        empty_text:'REQUIRED_FIELD',
        validation_text:'',
        required:true
    },
    {
        label:'EMAIL',
        property_name:'email',
        type:'email',
        empty_text:'REQUIRED_FIELD',
        validation_text:'INVALID_EMAIL',
        required:true
    },
    {
        label:'PHONE',
        property_name:'phone',
        type:'phone',
        empty_text:'REQUIRED_FIELD',
        validation_text:'INVALID_PHONE',
        required:false
    },
    {
        label:'POSITION',
        property_name:'position',
        type:'text',
        empty_text:'REQUIRED_FIELD',
        validation_text:'',
        required:false
    },
    {
        label:'PASSWORD',
        property_name:'password',
        type:'password',
        empty_text:'REQUIRED_FIELD',
        validation_text:''
    }
]
export default inputs_data