import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { tabsState } from "../../../../recoil/CodeEditorState";
import * as S from "./CodeEditor.style";
import { Desktop, Mobile } from "../../../../components/Responsive";
import EmptyActiveTap from "./EmptyActiveTap";
import Tab from "./Tab";
import * as Icon from "../../../../components/Icon";
import { useFileManage } from "../../../../hooks/CodeEditor/useFileManage";
import CodeMirror from "./CodeMirror";
import VoiceChat from "../../../../components/VoiceChat/VoiceChat";

function CodeEditer() {
  const [tabs, setTabs] = useRecoilState(tabsState);
  const { saveActiveTabFile } = useFileManage();

  const handleSave = () => {
    saveActiveTabFile();
  };

  const handleShare = () => {
    const webAddress = window.location.href;

    navigator.clipboard.writeText(webAddress);
  };

  useEffect(() => {
    const tabsDefulteValue = {
      active: -1,
      files: [],
      codes: [],
    };
    setTabs(tabsDefulteValue);
  }, []);

  return (
    <React.Fragment>
      <Desktop>
        {tabs.active != -1 && (
          <S.Header>
            <S.Tabs>
              {tabs.files.map((file) => (
                <Tab key={file} file={file} />
              ))}
            </S.Tabs>
            <S.Icons>
              <S.IconWrapper onClick={handleSave}>
                <Icon.Save size={16} />
              </S.IconWrapper>

              <S.IconWrapper onClick={handleShare}>
                <Icon.Share size={16} />
              </S.IconWrapper>

              <S.IconWrapper>
                <Icon.Chat size={14} />
              </S.IconWrapper>
              <VoiceChat />
            </S.Icons>
          </S.Header>
        )}

        {tabs.active !== -1 && <CodeMirror />}
        {tabs.active == -1 && <EmptyActiveTap />}
      </Desktop>

      <Mobile>
        <S.MContainer>
          {tabs.active != -1 && (
            <S.MHeader>
              {tabs.files.map((file) => (
                <Tab key={file} file={file} />
              ))}
            </S.MHeader>
          )}

          {tabs.active !== -1 && <CodeMirror />}
          {tabs.active == -1 && <EmptyActiveTap />}
        </S.MContainer>
      </Mobile>
    </React.Fragment>
  );
}

export default CodeEditer;
