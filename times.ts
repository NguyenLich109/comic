const CalculateTimeAgo = (previousDate: string)=> {
    const currentDate: Date = new Date();
    const timeDifference: number = currentDate.getTime() - new Date(previousDate).getTime();
  
    // Chuyển đổi thời gian từ milliseconds sang giây, phút, giờ và ngày
    const seconds: number = Math.floor(timeDifference / 1000);
    const minutes: number = Math.floor(seconds / 60);
    const hours: number = Math.floor(minutes / 60);
    const days: number = Math.floor(hours / 24);
  
    // Xác định đơn vị thời gian phù hợp
    if (days > 0) {
      return `${days} ngày trước`;
    } else if (hours > 0) {
      return `${hours} giờ trước`;
    } else if (minutes > 0) {
      return `${minutes} phút trước`;
    } else {
      return `${seconds} giây trước`;
    }
}

export default CalculateTimeAgo