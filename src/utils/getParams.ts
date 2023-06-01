import type { RouteConfig } from '../types';

/**
 * @description route의 REGEXP에 매칭된 문자열을 파라미터 이름을 키로 사용하여 객체로 반환
 */
const getParams = (route: RouteConfig, path: string) => {
  const params: { [key: string]: string } = {};

  // REGEXP match는 매칭된 문자열(전체 문자열)과 그룹으로 매칭된 문자열을 배열로 반환, 없으면 null 반환
  // ex) matches = ["/post/12/user/34", "12", "34"]
  const matches = path.match(route.fragmentRegExp);

  // 첫 번째 매칭된 문자열은 전체 문자열이므로 제외
  matches?.shift();

  // route.params에 저장된 파라미터 이름을 키로 사용하여 params에 저장
  matches?.forEach((paramValue, idx) => {
    const paramName = route.params[idx];
    params[paramName] = paramValue;
  });

  return params;
};

export default getParams;
