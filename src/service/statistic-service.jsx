import MUtil from 'util/mm.jsx';

const _mm = new MUtil();
class Statistic{
	getHomeCount(){
		return _mm.request({
			url: 'manage/statistic/base_count.do',
		})
	}
	
}
export default Statistic;