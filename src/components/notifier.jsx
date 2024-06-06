const Notifier = (props) => {
    
    const notifierClass = {
        'error': 'notifier-red',
        'success': 'notifier-green',
        'warning': 'notifier-yellow'
    }

    
    return (
        <div className={'notifier '+notifierClass[props.type]}>
            {props.message}
        </div>
    )
}

export default Notifier