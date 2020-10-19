package travelpack;

import travelpack.dao.MemberDao;

import java.util.List;

public class MemberResponse {
    private List<MemberDao> members;

    public MemberResponse() {
    }

    public MemberResponse(List<MemberDao> members) {
        this.members = members;
    }

    public List<MemberDao> getMembers() {
        return members;
    }
}
