import { compose } from '@bem-react/core';

import { Icon as Base } from 'lego-on-react';

import IconTypeShort from './_glyph/_short/Icon_glyph_short';
import IconTypeLong from './_glyph/_long/Icon_glyph_long';
import IconTypeCheck from './_glyph/_check/Icon_glyph_check';
import IconTypeSelect from './_glyph/_select/Icon_glyph_select';
import IconTypeNumber from './_glyph/_number/Icon_glyph_number';
import IconTypeTrash from './_glyph/_trash/Icon_glyph_trash';
import IconTypePen from './_glyph/_pen/Icon_glyph_pen';
import IconTypeDots from './_glyph/_dots/Icon_glyph_dots';
import IconTypeEye from './_glyph/_eye/Icon_glyph_eye';
import IconTypePlus from './_glyph/_plus/Icon_glyph_plus';

import IconSizeM from './_size/_m/Icon_size_m';

const Icon = compose(
	IconTypeShort,
	IconTypeLong,
	IconTypeCheck,
	IconTypeSelect,
	IconTypeNumber,
	IconTypeTrash,
	IconTypePen,
	IconTypeDots,
	IconTypeEye,
	IconTypePlus,
	IconSizeM
)(Base);

export default Icon;