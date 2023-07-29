import './index.less';
import type { ProTableProps } from './typing';
/**
 * 🏆 Use Ant Design Table like a Pro! 更快 更好 更方便
 *
 * @param props
 */
declare const ProviderWarp: <T extends Record<string, any>, U extends Record<string, any> = Record<string, any>, ValueType = "text">(props: ProTableProps<T, U, ValueType>) => JSX.Element;
export default ProviderWarp;
