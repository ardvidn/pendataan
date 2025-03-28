import { Column, Entity, Index } from "typeorm";

@Index("g19_1_ak", ["kdKantor", "kdKanwil", "noSpmp", "statusLelang"], {})
@Index("g19_g15_fk", ["kdKantor", "kdKanwil", "noSpmp"], {})
@Index("permintaan_jadual_lelang_pkey", ["kdKantor", "kdKanwil", "noPmtJdlLelang"], { unique: true })
@Entity("permintaan_jadual_lelang", { schema: "public" })
export class PermintaanJadualLelang {
  @Column("character", { primary: true, name: "kd_kanwil", length: 2 })
  kdKanwil!: string;

  @Column("character", { primary: true, name: "kd_kantor", length: 2 })
  kdKantor!: string;

  @Column("character", { primary: true, name: "no_pmt_jdl_lelang", length: 30 })
  noPmtJdlLelang!: string;

  @Column("character", { name: "no_spmp", length: 30 })
  noSpmp!: string;

  @Column("character", { name: "kd_kantor_lelang", length: 10 })
  kdKantorLelang!: string;

  @Column("timestamp without time zone", { name: "tgl_srt_pmt_jdl_lelang" })
  tglSrtPmtJdlLelang!: Date;

  @Column("timestamp without time zone", { name: "tgl_pmt_pelelangan" })
  tglPmtPelelangan!: Date;

  @Column("smallint", { name: "status_lelang", default: () => "0" })
  statusLelang!: number;

  @Column("timestamp without time zone", { name: "tgl_pelelangan" })
  tglPelelangan!: Date;

  @Column("character varying", { name: "tempat_pelelangan", length: 30 })
  tempatPelelangan!: string;

  @Column("timestamp without time zone", {
    name: "tgl_cetak_srt_pmt_jdl_lelang",
    default: () => "statement_timestamp()",
  })
  tglCetakSrtPmtJdlLelang!: Date;

  @Column("character", { name: "nip_pencetak_srt_pmt_jdl_llg", length: 18 })
  nipPencetakSrtPmtJdlLlg!: string;
}
