// src/modules/workshop/data/workshops.ts
import { getAssetPath } from '@/utils/prefix';

import { Workshop } from '@/modules/workshop/types'
export type { SyllabusContent, SyllabusBlock, Workshop } from '@/modules/workshop/types';

import { arduinoWorkshop} from './items/arduinoWorkshop';
import { stm32Workshop } from './items/stm32Workshop';
import { altiumWorkshop } from './items/altiumWorkshop';
import { powerWorkshop } from './items/powerWorkshop';
import { adcsWorkshop } from './items/adcsWorkshop';
import { additiveManufacturingWorkshop } from './items/additiveManufacturingWorkshop';
import { remoteSensingWorkshop } from './items/remoteSensingWorkshop';
import { agenticAiWorkshop } from './items/agenticAiWorkshop';
import { ttncWorkshop } from './items/ttncWorkshop';

// import { Workshop } from '../types';


export const WORKSHOPS: Workshop[] = [
  arduinoWorkshop,
  stm32Workshop,
  powerWorkshop,
  altiumWorkshop,
  additiveManufacturingWorkshop,
  adcsWorkshop,
  agenticAiWorkshop,
  remoteSensingWorkshop,
  ttncWorkshop,
];
