import { Control, ControllerRenderProps } from 'react-hook-form';

import { Checkbox } from '@/components/ui/checkbox';
import { FormField, FormItem, FormMessage } from '@/components/ui/form';
import { SignupFormData } from '@/types/signup';

interface TermsAgreementProps {
  control: Control<SignupFormData>;
  onOpenTerms: (type: 'service' | 'privacy') => void;
}

type TermField = ControllerRenderProps<SignupFormData, 'terms'>;

const TermsAgreement = ({ control, onOpenTerms }: TermsAgreementProps) => {
  const handleAllTermsChange = (checked: boolean, field: TermField) => {
    if (checked) {
      field.onChange(['age']);
      onOpenTerms('service');
    } else {
      field.onChange([]);
    }
  };

  const handleTermChange = (checked: boolean, id: string, field: TermField) => {
    const currentTerms = field.value || [];

    if (checked) {
      field.onChange([...currentTerms, id]);
    } else {
      field.onChange(currentTerms.filter((value: string) => value !== id));
    }
  };

  const handleViewTerms = (id: 'service' | 'privacy', field: TermField) => {
    onOpenTerms(id);
    const currentTerms = field.value || [];
    if (!currentTerms.includes(id)) {
      field.onChange([...currentTerms, id]);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <FormField
          control={control}
          name="terms"
          render={({ field }) => (
            <>
              <Checkbox
                id="all-term"
                onCheckedChange={(checked) => handleAllTermsChange(checked as boolean, field)}
                checked={field.value?.length === 3}
                className="h-[18px] w-[18px]"
              />
              <label htmlFor="all-term" className="text-sm font-medium">
                모두 동의
              </label>
            </>
          )}
        />
      </div>
      <FormField
        control={control}
        name="terms"
        render={({ field }) => (
          <FormItem>
            <div className="flex flex-col gap-2">
              {[
                { id: 'age', label: '만 14세 이상', showViewButton: false },
                { id: 'service', label: '서비스 이용약관 동의', showViewButton: true },
                { id: 'privacy', label: '개인정보 수집 · 이용 동의', showViewButton: true },
              ].map(({ id, label, showViewButton }) => (
                <div key={id} className="flex items-center gap-2">
                  <FormItem className="flex h-[18px] items-center">
                    <Checkbox
                      checked={field.value?.includes(id)}
                      onCheckedChange={(checked) => handleTermChange(checked as boolean, id, field)}
                      className="h-[18px] w-[18px]"
                    />
                  </FormItem>
                  <div className="flex items-center">
                    <label className="text-sm font-medium">
                      <span className="text-primary">(필수)</span> {label}
                      {showViewButton && (
                        <button
                          type="button"
                          onClick={() => handleViewTerms(id as 'service' | 'privacy', field)}
                          className="text-gray-400 hover:text-gray-600 ml-2"
                        >
                          보기
                        </button>
                      )}
                    </label>
                  </div>
                </div>
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default TermsAgreement;
