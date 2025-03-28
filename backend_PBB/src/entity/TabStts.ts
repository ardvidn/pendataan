import { Column, Entity } from "typeorm";

@Entity("tab_stts", { schema: "public" })
export class TabStts {
  @Column("character", { name: "kd_kanwil", length: 2 })
  kdKanwil!: string;

  @Column("character", { name: "kd_kppbb", length: 2 })
  kdKppbb!: string;

  @Column("character", { name: "kd_bank_tunggal", length: 2 })
  kdBankTunggal!: string;

  @Column("character", { name: "kd_bank_persepsi", length: 2 })
  kdBankPersepsi!: string;

  @Column("character", { name: "kd_tp", length: 2 })
  kdTp!: string;

  @Column("integer", { name: "stts_byr", default: () => "0" })
  sttsByr!: number;

  @Column("integer", { name: "stts_btl", default: () => "0" })
  sttsBtl!: number;

  @Column("integer", { name: "stts_salinan", nullable: true })
  sttsSalinan!: number | null;

  @Column("timestamp without time zone", { name: "tgl_lapor", nullable: true })
  tglLapor!: Date | null;
}
