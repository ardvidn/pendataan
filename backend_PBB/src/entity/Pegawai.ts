import { Column, Entity, Index, OneToMany } from "typeorm";
import { DafnomOp } from "./DafnomOp";
import { DafnomPiutang } from "./DafnomPiutang";
import { KeputusanAngsuranPbb } from "./KeputusanAngsuranPbb";
import { PembayaranSkp } from "./PembayaranSkp";
import { PembayaranSppt } from "./PembayaranSppt";
import { PembayaranStp } from "./PembayaranStp";
import { PenghapusanOpSe14 } from "./PenghapusanOpSe14";
import { RincianAngsuranPbb } from "./RincianAngsuranPbb";
import { Skp } from "./Skp";
import { Sppt } from "./Sppt";
import { Stp } from "./Stp";
import { TtrSkp } from "./TtrSkp";
import { TtrStp } from "./TtrStp";

@Index("pegawai_pkey", ["nip"], { unique: true })
@Entity("pegawai", { schema: "public" })
export class Pegawai {
  @Column("character", { primary: true, name: "nip", length: 18 })
  nip!: string;

  @Column("character varying", { name: "nm_pegawai", length: 30 })
  nmPegawai!: string;

  @OneToMany(() => DafnomOp, (dafnomOp) => dafnomOp.nipPembentuk)
  dafnomOps!: DafnomOp[];

  @OneToMany(() => DafnomOp, (dafnomOp) => dafnomOp.nipPemutakhir)
  dafnomOps2!: DafnomOp[];

  @OneToMany(() => DafnomPiutang, (dafnomPiutang) => dafnomPiutang.nipPembentuk)
  dafnomPiutangs!: DafnomPiutang[];

  @OneToMany(() => DafnomPiutang, (dafnomPiutang) => dafnomPiutang.nipPemutakhir)
  dafnomPiutangs2!: DafnomPiutang[];

  @OneToMany(() => KeputusanAngsuranPbb, (keputusanAngsuranPbb) => keputusanAngsuranPbb.nipPerekamSkAngsuran)
  keputusanAngsuranPbbs!: KeputusanAngsuranPbb[];

  @OneToMany(() => PembayaranSkp, (pembayaranSkp) => pembayaranSkp.nipPerekamByrSkp)
  pembayaranSkps!: PembayaranSkp[];

  @OneToMany(() => PembayaranSppt, (pembayaranSppt) => pembayaranSppt.nipRekamByrSppt)
  pembayaranSppts!: PembayaranSppt[];

  @OneToMany(() => PembayaranStp, (pembayaranStp) => pembayaranStp.nipPerekamByrStp)
  pembayaranStps!: PembayaranStp[];

  @OneToMany(() => PenghapusanOpSe14, (penghapusanOpSe14) => penghapusanOpSe14.nipPerekamPenghapusanOp)
  penghapusanOpSes!: PenghapusanOpSe14[];

  @OneToMany(() => RincianAngsuranPbb, (rincianAngsuranPbb) => rincianAngsuranPbb.nipPerekamAngsuran)
  rincianAngsuranPbbs!: RincianAngsuranPbb[];

  @OneToMany(() => Skp, (skp) => skp.nipPencetakSkp)
  skps!: Skp[];

  @OneToMany(() => Sppt, (sppt) => sppt.nipPencetakSppt)
  sppts!: Sppt[];

  @OneToMany(() => Stp, (stp) => stp.nipPencetakStp)
  stps!: Stp[];

  @OneToMany(() => TtrSkp, (ttrSkp) => ttrSkp.nipPerekamTtrSkp)
  ttrSkps!: TtrSkp[];

  @OneToMany(() => TtrStp, (ttrStp) => ttrStp.nipPerekamTtrStp)
  ttrStps!: TtrStp[];
}
