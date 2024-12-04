/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * AIPark API
 * 기업연계 파이널 프로젝트 API 문서 백엔드 개발용
 * OpenAPI spec version: 1.0.0
 */
export type DownloadGeneratedAudio4Params = {
  bucketRoute: string;
};

export type DownloadGeneratedAudio3Params = {
  bucketRoute: string;
};

export type DownloadGeneratedAudio2Params = {
  bucketRoute: string;
};

export type DownloadGeneratedAudio1Params = {
  bucketRoute: string;
};

export type DownloadGeneratedAudioParams = {
  bucketRoute: string;
};

export type TestFailParams = {
  'Do Would you like to throw an exception?': string;
};

export type ConvertMultipleAudiosBody = {
  concatRequestDto: ConcatRequestDto;
  /** 업로드할 파일들 */
  files: Blob[];
};

export type UploadConcatBody = {
  file: Blob;
};

export type UploadConcatParams = {
  projectId: number;
};

export type UploadFiles1Body = {
  files: Blob[];
};

export type UploadFiles1Params = {
  memberId: number;
  projectId: number;
  audioType: string;
  voiceId: string;
};

export type UploadFilesBody = {
  files: Blob[];
};

export type UploadFilesParams = {
  memberId: number;
  projectId: number;
  audioType: string;
  voiceId: string;
};

export type UploadUnit1Body = {
  file: Blob;
};

export type UploadUnit1Params = {
  detailId: number;
  projectId: number;
};

export type UploadUnitBody = {
  file: Blob;
};

export type UploadUnitParams = {
  detailId: number;
  projectId: number;
};

export type ProcessVCProjectBody = {
  files: Blob[];
  vcSaveDto: VCSaveDto;
};

export type ProcessVCProjectParams = {
  memberId: number;
};

export type SaveVCProjectBody = {
  file?: Blob[];
  metadata: VCSaveDto;
};

export type DataResponseDtoData = { [key: string]: unknown };

export interface DataResponseDto {
  code?: number;
  data?: DataResponseDtoData;
  message?: string;
  success?: boolean;
}

export interface ConcatRequestDetailDto {
  audioSeq?: number;
  checked?: boolean;
  endSilence?: number;
  id?: number;
  sourceAudio?: Blob;
  unitScript?: string;
}

/**
 * 요청 DTO
 */
export interface ConcatRequestDto {
  concatRequestDetails?: ConcatRequestDetailDto[];
  globalFrontSilenceLength?: number;
  globalTotalSilenceLength?: number;
  memberId?: number;
  projectId?: number;
  projectName?: string;
}

export type MemberAudioMetaAudioType =
  (typeof MemberAudioMetaAudioType)[keyof typeof MemberAudioMetaAudioType];

export const MemberAudioMetaAudioType = {
  VC_SRC: 'VC_SRC',
  VC_TRG: 'VC_TRG',
  CONCAT: 'CONCAT',
} as const;

export type MemberAudioMetaAudioFormat =
  (typeof MemberAudioMetaAudioFormat)[keyof typeof MemberAudioMetaAudioFormat];

export const MemberAudioMetaAudioFormat = {
  WAV: 'WAV',
  MP3: 'MP3',
} as const;

export interface Member {
  birthDate?: string;
  createdAt?: string;
  createdBy?: string;
  createdDate?: string;
  deletedAt?: string;
  email?: string;
  gender?: number;
  id?: number;
  is_deleted?: boolean;
  lastModifiedBy?: string;
  lastModifiedDate?: string;
  name?: string;
  phoneNumber?: string;
  pwd?: string;
  tou?: string;
  updatedAt?: string;
}

export interface MemberAudioMeta {
  audioFormat?: MemberAudioMetaAudioFormat;
  audioType?: MemberAudioMetaAudioType;
  audioUrl?: string;
  bucketRoute?: string;
  createdAt?: string;
  createdBy?: string;
  createdDate?: string;
  deletedAt?: string;
  id?: number;
  isDeleted?: boolean;
  lastModifiedBy?: string;
  lastModifiedDate?: string;
  member?: Member;
  script?: string;
  trgVoiceId?: string;
}

export interface ConcatDetailDto {
  audioSeq?: number;
  checked?: boolean;
  endSilence?: number;
  id?: number;
  memberAudioMeta?: MemberAudioMeta;
  unitScript?: string;
}

export interface ConcatSaveDto {
  concatDetails?: ConcatDetailDto[];
  globalFrontSilenceLength?: number;
  globalTotalSilenceLength?: number;
  projectId?: number;
  projectName?: string;
}

export interface TTSProject {
  id: number;
  projectName: string;
  apiStatus: string;
  fullScript: string;
  globalPitch: number;
  globalSpeed: number;
  globalVolume: number;
  voiceStyleId: number | null;
}

export interface TTSDetailDto {
  id: number | null;
  isDeleted: boolean;
  unitPitch?: number;
  unitScript?: string;
  unitSequence: number;
  unitSpeed?: number;
  unitVoiceStyleId: number | null;
  unitVolume?: number;
}

export interface TTSSaveDto {
  fullScript?: string;
  globalPitch?: number;
  globalSpeed?: number;
  globalVoiceStyleId?: number;
  globalVolume?: number;
  memberId?: number;
  projectId: number | null;
  projectName?: string;
  ttsDetails?: TTSDetailDto[];
}

export interface TTSSpecificResponse {
  ttsProject: TTSProject;
  ttsDetails: TTSDetailDto[];
}

export interface ResponseDto<T = unknown> {
  code?: number;
  message?: string;
  success?: boolean;
  data?: T; // 제네릭으로 데이터를 확장 가능하도록 설계
}

export type AudioFileDtoAudioType =
  (typeof AudioFileDtoAudioType)[keyof typeof AudioFileDtoAudioType];

export const AudioFileDtoAudioType = {
  VC_SRC: 'VC_SRC',
  VC_TRG: 'VC_TRG',
  CONCAT: 'CONCAT',
} as const;

export interface AudioFileDto {
  audioType?: AudioFileDtoAudioType;
  isChecked?: boolean;
  localFileName?: string;
  s3MemberAudioMetaId?: number;
  unitScript?: string;
}

export interface VCSaveDto {
  projectId?: number;
  projectName?: string;
  srcFiles?: AudioFileDto[];
  trgFiles?: AudioFileDto[];
}

export interface Project {
  projectId: number;
  projectType: string;
  projectName: string;
  script?: string;
  projectStatus?: string;
  updatedAt: string;
  createdAt?: string;
}

export interface ProjectsResponse {
  content: Project[];
  pageable: {
    pageNumber: number;
    pageSize: number;
  };
  totalPages: number;
  totalElements: number;
}

export interface WorkspaceProject {
  id: number;
  type: string;
  name: string;
  script?: string;
  status?: string;
  updatedAt: string;
  createdAt?: string;
}

export type workspacesResponse = WorkspaceProject[];

export interface Export {
  metaId: number;
  fileName: string;
  downloadLink: string;
  unitStatus: string;
  projectName: string;
  projectType: string;
  script: string | null;
  createdAt: string;
}
