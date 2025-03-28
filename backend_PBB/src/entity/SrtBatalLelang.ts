import { Column, Entity, Index } from "typeorm";

@Index("srt_batal_lelang_pkey", ["kdKantor", "kdKanwil", "noSrtBatalLelang"], {
  unique: true,
})
@Index("g20_g19_fk", ["kdKantor", "kdKanwil", "noPmtJdlLelang"], {})
@Entity("srt_batal_lelang", { schema: "public" })
export class SrtBatalLelang {
  @Column("character", { primary: true, name: "kd_kanwil", length: 2 })
  kdKanwil!: string;

  @Column("character", { primary: true, name: "kd_kantor", length: 2 })
  kdKantor!: string;

  @Column("character", {
    primary: true,
    name: "no_srt_batal_lelang",
    length: 30,
  })
  noSrtBatalLelang!: string;

  @Column("character", { name: "no_pmt_jdl_lelang", length: 30 })
  noPmtJdlLelang!: string;

  @Column("character varying", { name: "alasan_batal_lelang", length: 30 })
  alasanBatalLelang!: string;

  @Column("timestamp without time zone", {
    name: "tgl_terbit_srt_batal_lelang",
  })
  tglTerbitSrtBatalLelang!: Date;

  @Column("timestamp without time zone", {
    name: "tgl_cetak_srt_batal_lelang",
    default: () => "statement_timestamp()",
  })
  tglCetakSrtBatalLelang!: Date;

  @Column("character", { name: "nip_pencetak_srt_batal_lelang", length: 18 })
  nipPencetakSrtBatalLelang!: string;
}
