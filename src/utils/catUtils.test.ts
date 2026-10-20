import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateCatAgeToHumanYears,
  calculateDailyWaterRequirement,
  filterBreeds,
  checkToxicSubstance,
  type Breed
} from './catUtils.ts';

test('calculateCatAgeToHumanYears accurately converts feline to human years', () => {
  assert.equal(calculateCatAgeToHumanYears(0), 0);
  assert.equal(calculateCatAgeToHumanYears(1), 15);
  assert.equal(calculateCatAgeToHumanYears(2), 24);
  assert.equal(calculateCatAgeToHumanYears(3), 28);
  assert.equal(calculateCatAgeToHumanYears(5), 36);
  assert.equal(calculateCatAgeToHumanYears(10), 56);
});

test('calculateDailyWaterRequirement calculates 55mL per kg body weight', () => {
  assert.equal(calculateDailyWaterRequirement(0), 0);
  assert.equal(calculateDailyWaterRequirement(4), 220);
  assert.equal(calculateDailyWaterRequirement(5), 275);
});

const sampleBreeds: Breed[] = [
  {
    id: 'scottish-fold',
    name: 'Scottish Fold',
    vietnameseName: 'Mèo tai cụp Scotland',
    origin: 'Scotland',
    coatLength: 'short',
    size: 'medium',
    sheddingLevel: 3,
    energyLevel: 3,
    affectionLevel: 5,
    lifespan: '11 - 15 năm',
    temperament: ['Hiền lành', 'Tình cảm', 'Điềm tĩnh'],
    description: 'Giống mèo nổi bật với đôi tai cụp đặc trưng...',
    groomingTips: 'Chải lông 2-3 lần/tuần',
    bestFor: 'Gia đình, căn hộ',
    image: '/src/assets/images/cat_scottish_fold_1792424736824.jpg'
  },
  {
    id: 'ragdoll',
    name: 'Ragdoll',
    vietnameseName: 'Mèo Ragdoll',
    origin: 'Mỹ',
    coatLength: 'long',
    size: 'large',
    sheddingLevel: 4,
    energyLevel: 2,
    affectionLevel: 5,
    lifespan: '12 - 17 năm',
    temperament: ['Thư thái', 'Đáng yêu', 'Thích ôm'],
    description: 'Giống mèo lông dài với đôi mắt xanh thẳm...',
    groomingTips: 'Chải lông hàng ngày',
    bestFor: 'Người thích âu yếm',
    image: '/src/assets/images/cat_grooming_brush_1792424736383.jpg'
  }
];

test('filterBreeds filters correctly by keyword and facets', () => {
  const queryResult = filterBreeds(sampleBreeds, 'Scotland');
  assert.equal(queryResult.length, 1);
  assert.equal(queryResult[0].id, 'scottish-fold');

  const coatResult = filterBreeds(sampleBreeds, '', { coatLength: 'long' });
  assert.equal(coatResult.length, 1);
  assert.equal(coatResult[0].id, 'ragdoll');

  const tagResult = filterBreeds(sampleBreeds, '', { temperamentTag: 'Hiền lành' });
  assert.equal(tagResult.length, 1);
  assert.equal(tagResult[0].id, 'scottish-fold');
});

test('checkToxicSubstance detects high risk items and safe items', () => {
  const lilyCheck = checkToxicSubstance('lily');
  assert.equal(lilyCheck.isToxic, true);
  assert.equal(lilyCheck.severity, 'lethal');

  const catnipCheck = checkToxicSubstance('catnip');
  assert.equal(catnipCheck.isToxic, false);
  assert.equal(catnipCheck.severity, 'safe');

  const paracetamolCheck = checkToxicSubstance('paracetamol');
  assert.equal(paracetamolCheck.isToxic, true);
  assert.equal(paracetamolCheck.severity, 'lethal');
});
