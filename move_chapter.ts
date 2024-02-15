const MoveChapter = ({value, data}:any) => {  
    let retult = data.number_chapter + value > data.id_story.number_chap ? data.id_story.number_chap : data.number_chapter + value < 0 ? 0 : data.number_chapter + value
    return retult
}

export default MoveChapter