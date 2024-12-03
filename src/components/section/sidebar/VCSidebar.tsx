import { TbSettings } from 'react-icons/tb';

import { ApplyButton, ResetChangesButton } from '@/components/custom/buttons/IconButton';
import VoiceSelection from '@/components/custom/features/vc/VoiceSelection';
import TooltipWrapper from '@/components/custom/guide/TooltipWrapper';
import { Label } from '@/components/ui/label';
import { VC_TOOLTIP } from '@/constants/tooltips';
import { useVCStore } from '@/stores/vc.store';

export interface TargetVoice {
  id: string;
  name: string;
  description: string;
  avatarUrl: string;
  type: 'custom';
}

interface VCSidebarProps {
  selectedVoice: string;
  onVoiceSelect: (voice: string) => void;
  onApplyConversion: () => Promise<void>;
  customVoices: TargetVoice[];
  onVoiceUpload: (voices: TargetVoice[]) => void;
}

const VCSidebar: React.FC<VCSidebarProps> = ({
  selectedVoice,
  onVoiceSelect,
  customVoices,
  onVoiceUpload,
}) => {
  const { showAlert, applyToSelected } = useVCStore();

  const handleVoiceUpload = (files: File[]) => {
    const newVoices = files.map((file) => ({
      id: file.name,
      name: file.name,
      description: '',
      avatarUrl: '',
      type: 'custom' as const,
    }));

    onVoiceUpload([...customVoices, ...newVoices]);
    onVoiceSelect(files[0].name);
  };

  const handleVoiceDelete = (id: string) => {
    onVoiceUpload(customVoices.filter((voice) => voice.id !== id));
  };

  const handleVoiceEdit = (newName: string) => {
    onVoiceUpload(
      customVoices.map((v) =>
        v.name === selectedVoice
          ? {
              ...v,
              name: newName,
            }
          : v
      )
    );
  };

  const handleApplyClick = async () => {
    if (!selectedVoice) {
      showAlert('타겟 보이스를 선택해주세요.', 'destructive');
      return;
    }
    applyToSelected();
    showAlert('타겟 보이스가 적용되었습니다.', 'default');
  };

  return (
    <aside className="w-[276px] min-h-full border-l border-gray-200 bg-background">
      <div className="flex flex-col h-full p-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
            <TbSettings className="w-5 h-5" />
            VC 옵션 설정
          </h2>
        </div>

        <div>
          <Label className="text-sm font-bold mb-4 block">타겟 보이스</Label>
          <VoiceSelection
            customVoices={customVoices}
            selectedVoice={selectedVoice}
            onVoiceSelect={onVoiceSelect}
            onVoiceUpload={handleVoiceUpload}
            onVoiceDelete={handleVoiceDelete}
            onVoiceEdit={handleVoiceEdit}
          />
        </div>

        <div className="flex flex-col gap-4">
          <TooltipWrapper content={VC_TOOLTIP.APPLY}>
            <div>
              <ApplyButton
                onClick={handleApplyClick}
                className={!selectedVoice ? 'opacity-50 cursor-not-allowed' : ''}
              />
            </div>
          </TooltipWrapper>
          <TooltipWrapper content={VC_TOOLTIP.RESET_SETTINGS}>
            <div>
              <ResetChangesButton />
            </div>
          </TooltipWrapper>
        </div>
      </div>
    </aside>
  );
};

export default VCSidebar;
