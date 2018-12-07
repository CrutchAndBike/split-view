import { compose } from '@bem-react/core';

import { Icon as Base } from 'lego-on-react';

import IconTypeShort from './_glyph/_short/Icon_glyph_short';
import IconTypeLong from './_glyph/_long/Icon_glyph_long';
import IconTypeCheck from './_glyph/_check/Icon_glyph_check';
import IconTypeRadio from './_glyph/_radio/Icon_glyph_radio';
import IconTypeNumber from './_glyph/_number/Icon_glyph_number';
import IconTypeTrash from './_glyph/_trash/Icon_glyph_trash';

import IconSizeM from './_size/_m/Icon_size_m';

const Icon = compose(
	IconTypeShort,
	IconTypeLong,
	IconTypeCheck,
	IconTypeRadio,
	IconTypeNumber,
	IconTypeTrash,
	IconSizeM
)(Base);

export default Icon;